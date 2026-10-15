const lines = [
  { text: "def get_user(request):", type: "ctx" },
  { text: "    user_id = request.GET['id']", type: "remove" },
  { text: "    query = f\"SELECT * FROM users WHERE id={user_id}\"", type: "remove" },
  { text: "    user_id = request.GET.get('id')", type: "add" },
  { text: "    query = \"SELECT * FROM users WHERE id = %s\"", type: "add" },
  { text: "    return db.execute(query, [user_id])", type: "ctx" },
];

const lineClass: Record<string, string> = {
  ctx: "text-[#a9bdb6]",
  remove: "diff-remove text-[#ffb4bd]",
  add: "diff-add text-[#b9f3dd]",
};

export function CodeDiffCard() {
  return (
    <div className="terminal-window w-full max-w-lg">
      <div className="terminal-titlebar">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="ml-2 font-[family-name:var(--font-mono)] text-xs text-[#7e9089]">
          auth-service/views.py
        </span>
        <span className="pill pill-critical ml-auto">SQL injection</span>
      </div>
      <div className="px-5 py-5 font-[family-name:var(--font-mono)] text-[13px] leading-6">
        {lines.map((l, i) => (
          <div key={i} className={`-mx-5 px-5 ${lineClass[l.type]}`}>
            {l.text}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-white/8 px-5 py-3">
        <span className="font-[family-name:var(--font-mono)] text-xs text-[#7e9089]">
          rule: python.django.security.injection.sql
        </span>
        <span className="pill pill-success">Autofix available</span>
      </div>
    </div>
  );
}
