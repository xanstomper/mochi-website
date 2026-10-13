function DemoWindow({ title, src, alt, caption, eager }) {
  const base = typeof window !== 'undefined' && window.location.pathname.startsWith('/mochi') ? '/mochi' : '';
  return (
    <div
      style={{
        background: '#0B0914',
        borderRadius: 14,
        border: '1px solid rgba(138, 103, 246, 0.25)',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          background: '#131122',
          padding: '9px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          fontFamily: 'var(--font-mono)',
          fontSize: 11.5,
          color: 'rgba(255, 255, 255, 0.75)',
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
        <span style={{ marginLeft: 6 }}>{title}</span>
      </div>
      <div style={{ background: '#06050b' }}>
        <img
          src={base + src}
          alt={alt}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          loading={eager ? 'eager' : 'lazy'}
        />
      </div>
      <div
        style={{
          textAlign: 'center',
          padding: '10px 14px',
          fontSize: 12,
          color: 'rgba(255, 255, 255, 0.6)',
          fontWeight: 600,
          fontFamily: 'var(--font-mono)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {caption}
      </div>
    </div>
  );
}

function TerminalDemos() {
  return (
    <section id="demos" className="doc-section">
      <AnimatedContent direction="bottom">
        <div className="doc-section-head">
          <span className="section-tag">LIVE PROOF</span>
          <h2 className="doc-section-title">Terminal Demos</h2>
          <p className="doc-section-desc">
            Mochi running for real — unscripted goal execution, from launch to completed build, in the actual TUI.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 22 }}>
          <DemoWindow
            title="mochi"
            src="/assets/demo/tui_demo.gif"
            alt="Mochi terminal session"
            caption="Live session trace: goal decomposition and tool execution"
            eager
          />
          <DemoWindow
            title={'mochi "code snake game"'}
            src="/assets/demo/tui_snake.gif"
            alt="Mochi autonomous build"
            caption="Live session trace: autonomous multi-pass verification loop"
            eager
          />
          <DemoWindow
            title="mochi (fresh launch)"
            src="/assets/demo/tui_launch.gif"
            alt="Mochi cold launch and splash"
            caption="Cold start to interactive prompt — no warm-up, no lag"
          />
          <DemoWindow
            title="mochi (skills library)"
            src="/assets/demo/tui_skills.gif"
            alt="Mochi skills library browsing"
            caption="Browsing the bundled skill library in the TUI"
          />
        </div>
      </AnimatedContent>
    </section>
  );
}

export { TerminalDemos };
