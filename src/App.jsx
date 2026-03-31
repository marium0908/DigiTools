import React, { Suspense, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import View from './components/view/View'
import PremiumSection from './components/PremiumSection/PremiumSection'
import AccountStart from './components/accountStart/AccountStart'
import Subscription from './components/subscription/Subscription'
import ExploreSection from './components/exploreSection/ExploreSection'
import Footer from './components/footer/Footer'

const dataLoad = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

const App = () => {
  const [card, setCard] = useState([]);

  const dataCardLoad = dataLoad();

  return (
    <div>
      {/* ✅ Navbar stays fixed */}
      <Navbar card={card} />

      {/* ✅ Wrap all page content in this div with padding-top */}
      <div className="pt-20">
        <Hero />
        <View />

        <Suspense fallback={<h1>Loading.....</h1>}>
          <PremiumSection
            dataCardLoad={dataCardLoad}
            card={card}
            setCard={setCard}
          />
        </Suspense>

        <AccountStart />
        <Subscription />
        <ExploreSection />
        <Footer />
      </div>
    </div>
  )
}

export default App