import Header from '../components/Header'
import Card from '../components/Card'

export default function HomePage() {
  return (
    <>
      <Header headerText="Big Board Creator"/>
      <main className="prose lg:prose-xl">
        <p>Welcome to the ultimate resource for NBA draft enthusiasts and basketball fans alike. 
        Our NBA Draft Tool is a powerful and user-friendly platform designed to empower you to create your very own big board, mock draft and tier list for the NBA draft cycle.
        Whether you're a seasoned scout, a die-hard fan, or just curious about the future of the league, our tool is your go-to companion.</p>
        <Card 
          srcImage="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          altTxt="Album"
          title="Big Board"
          info="Create a big board that represents your rankings of the 30 best NBA prospects"
          btnTxt="View Bigboard"
        />
        <Card 
          srcImage="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          altTxt="Album"
          title="Tier List"
          info="Seperate prospects into your own custom made tiers"
          btnTxt="View Tierlist"
        />
        <Card 
          srcImage="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          altTxt="Album"
          title="Mock Board"
          info="Simulate the NBA Lottery and create your own mock draft"
          btnTxt="View Mock"
        />
      </main>
    </>
  );
}