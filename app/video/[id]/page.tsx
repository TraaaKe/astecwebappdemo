import Link from 'next/link';

export default function VideoDetailPage() {
  return (
    <main className="container">
      <div className="topbar">
        <Link className="button secondary" href="/">← Retour</Link>
      </div>
      <div className="detail">
        <div className="video-box">
          <div>
            <h2>Aperçu vidéo filigrané</h2>
            <p>La vidéo 4K finale n’est pas hébergée sur le site.</p>
          </div>
        </div>
        <aside className="panel">
          <h1>Atterrissage Air France AF1234 — A320</h1>
          <p className="meta">Air France · AF1234 · Airbus A320 · Piste 27R</p>
          <p>Date : 18 juin 2026 — 14:32</p>
          <p className="price">19,90 €</p>
          <a className="button" href="/success">Acheter — démo</a>
        </aside>
      </div>
    </main>
  );
}
