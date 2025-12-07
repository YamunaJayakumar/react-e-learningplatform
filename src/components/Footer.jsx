function Footer() {
  return (
    <footer className="mt-12 bg-linear-to-br from-indigo-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-2xl font-bold">Ready to get started?</div>
          <div className="text-sm text-indigo-100 mt-1">Join thousands of learners building real skills.</div>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-3 rounded-lg bg-gray-800 text-purple-300 font-semibold">Start free</button>
          <button className="px-5 py-3 rounded-lg border border-white text-white">Contact sales</button>
        </div>
      </div>
      <div className="border-t border-indigo-500/30 py-6">
        <div className="max-w-7xl mx-auto px-6 text-sm text-indigo-100 flex flex-col md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} EduFlow — All rights reserved</div>
          <div className="mt-3 md:mt-0">Privacy · Terms</div>
        </div>
      </div>
    </footer>
  );
}
export default Footer