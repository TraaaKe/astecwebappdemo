import Link from 'next/link';

const videos = [
  { id: '1', title: 'Atterrissage Air France AF1234 — A320', airline: 'Air France', flight: 'AF1234', aircraft: 'Airbus A320', type: 'Atterrissage', runway: '27R', date: '18 juin 2026 — 14:32', price: '19,90 €' },
  { id: '2', title: 'Décollage Emirates EK72 — B777-300ER', airline: 'Emirates', flight: 'EK72', aircraft: 'Boeing 777-300ER', type: 'Décollage', runway: '26L', date: '18 juin 2026 — 16:05', price: '24,90 €' },
  { id: '3', title: 'Atterrissage Lufthansa LH1041 — A321neo', airline: 'Lufthansa', flight: 'LH1041', aircraft: 'Airbus A321neo', type: 'Atterrissage', runway: '27L', date: '19 juin 2026 — 09:12', price: '19,90 €' }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="badge">Version démo sans Supabase</span>
          <h1>Retrouve la vidéo de ton vol à Paris CDG</h1>
          <p>Catalogue démo de vidéos d’atterrissages et décollages filmés à CDG. Cette version fonctionne sans base de données, Stripe ni Resend.</p>
        </div>
      </section>
      <main className="container">
        <div className="topbar">
          <h2>Catalogue</h2>
          <Link className="button secondary" href="/admin">Admin démo</Link>
        </div>
        <div className="filters">
          <input placeholder="Compagnie" />
          <input placeholder="N° de vol" />
          <input placeholder="Type d’avion" />
          <select><option>Tous les types</option><option>Atterrissage</option><option>Décollage</option></select>
        </div>
        <div className="grid">
          {videos.map((video) => (
            <article className="card" key={video.id}>
              <div className="thumb">Aperçu spotting CDG</div>
              <div className="card-content">
                <h3>{video.title}</h3>
                <p className="meta">{video.airline} · {video.flight} · {video.aircraft}<br />{video.type} · Piste {video.runway} · {video.date}</p>
                <p className="price">{video.price}</p>
                <Link className="button" href={`/video/${video.id}`}>Voir la vidéo</Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
