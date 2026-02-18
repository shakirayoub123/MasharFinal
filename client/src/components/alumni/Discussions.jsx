import { useState, useEffect } from "react";
import API from "../../utils/api";

const CATEGORIES = ["Alumni Discussion", "Announcements", "Events", "Learning", "General"];

// time formatter
const timeAgo = (date) => {
  const diff = Math.floor((Date.now() - new Date(date)) / 1000);
  if (diff < 60) return "Just now";
  if (diff < 3600) return Math.floor(diff/60)+"m ago";
  if (diff < 86400) return Math.floor(diff/3600)+"h ago";
  return Math.floor(diff/86400)+"d ago";
};

// Avatar
function Avatar({ initials, badge, size = "md" }) {
  const sizes = { sm: "w-8 h-8 text-xs", md: "w-10 h-10 text-sm" };
  return (
    <div className="relative flex-shrink-0">
      <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-indigo-500 to-slate-700 flex items-center justify-center text-white font-semibold`}>
        {initials}
      </div>
      {badge && (
        <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-indigo-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
          {badge}
        </span>
      )}
    </div>
  );
}

// Category Badge
function CategoryBadge({ category }) {
  const colors = {
    Announcements: "bg-amber-50 text-amber-600 border-amber-200",
    "Alumni Discussion": "bg-indigo-50 text-indigo-600 border-indigo-200",
    Events: "bg-emerald-50 text-emerald-600 border-emerald-200",
    Learning: "bg-sky-50 text-sky-600 border-sky-200",
    General: "bg-slate-50 text-slate-500 border-slate-200",
  };
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${colors[category] || colors["General"]}`}>
      {category}
    </span>
  );
}

// Modal
function CreatePostModal({ onClose, onPublish, user }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("Alumni Discussion");

  const canPublish = title.trim() || body.trim();

  const handlePublish = () => {
    if (!canPublish) return;
    onPublish({ title, body, category });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl">

        <div className="flex items-center gap-3 px-6 pt-5 pb-4 border-b">
          <Avatar initials={user.name?.charAt(0)} />
          <div>
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-xs text-slate-400">Create Post</p>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <input
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="w-full border rounded-xl px-3 py-2"
          />

          <textarea
            rows={4}
            placeholder="What's on your mind?"
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            className="w-full border rounded-xl px-3 py-2"
          />

          <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            className="w-full border rounded-xl px-3 py-2"
          >
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>

          <div className="flex justify-end gap-3 pt-3">
            <button onClick={onClose}>Cancel</button>
            <button
              onClick={handlePublish}
              className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Post Card
function PostCard({ post, onLike }) {
  return (
    <div className="bg-white rounded-2xl border p-5">
      <div className="flex gap-3 mb-3">
        <Avatar initials={post.author.initials}/>
        <div>
          <p className="font-semibold text-sm">{post.author.name}</p>
          <div className="flex gap-1 text-xs text-slate-400">
            {timeAgo(post.createdAt)} • <CategoryBadge category={post.category}/>
          </div>
        </div>
      </div>

      <h3 className="font-semibold">{post.title}</h3>
      <p className="text-slate-500 text-sm">{post.body}</p>

      <button
        onClick={()=>onLike(post._id)}
        className="mt-3 text-sm text-indigo-600"
      >
        👍 {post.likes}
      </button>
    </div>
  );
}

// MAIN COMPONENT
export default function Discussion() {

  const [posts,setPosts] = useState([]);
  const [user,setUser] = useState(null);
  const [showModal,setShowModal] = useState(false);
  const [activeFilter,setActiveFilter] = useState("All");

  // fetch user
  useEffect(()=>{
    API.get("/alumni/me").then(res=>setUser(res.data.alumni));
  },[]);

  // fetch posts
  useEffect(()=>{
    API.get("/posts").then(res=>setPosts(res.data));
  },[]);

  // publish
  const handlePublish = async (data)=>{
    const res = await API.post("/posts",data);
    setPosts(prev=>[res.data,...prev]);
  };

  // like
  const handleLike = async(id)=>{
    const res = await API.put(`/posts/like/${id}`);
    setPosts(prev=>prev.map(p=>p._id===id?res.data:p));
  };

  const filtered = activeFilter==="All"
    ? posts
    : posts.filter(p=>p.category===activeFilter);

  if(!user) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-6 space-y-4">

      <div className="flex justify-between">
        <h1 className="text-lg font-bold">Community Discussion</h1>
        <button
          onClick={()=>setShowModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
        >
          New Post
        </button>
      </div>

      <button
        onClick={()=>setShowModal(true)}
        className="w-full border rounded-xl p-3 text-left text-slate-400"
      >
        What's on your mind, {user.name.split(" ")[0]}?
      </button>

      <div className="flex gap-2">
        {["All","Announcements","Alumni Discussion","Events","Learning"].map(f=>(
          <button key={f} onClick={()=>setActiveFilter(f)} className="px-3 py-1 border rounded-full text-xs">
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map(post=>(
          <PostCard key={post._id} post={post} onLike={handleLike}/>
        ))}
      </div>

      {showModal && (
        <CreatePostModal
          user={user}
          onClose={()=>setShowModal(false)}
          onPublish={handlePublish}
        />
      )}
    </div>
  );
}
