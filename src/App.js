import './App.css';
import Carousel from 'react-elastic-carousel';
import Card from './componants/Card';
import { FaCircle } from 'react-icons/fa';

function App() {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
  ];
  return (
    <div className="app">
      <h1><span className=''>{<FaCircle />} LIVE</span> &nbsp; Upcoming Live Coaching</h1>
      <Carousel breakPoints={breakPoints}>
        <Card dadlineTime="5 days left to enroll"
          cardTxt="IBPS PO & SBI PO Live Coaching in English Batc.."
          cardDetail_1="240+ Live Classes"
          cardDetail_2="9000+ Questions"
          cardDetail_3="120+ Notes" />

        <Card dadlineTime="Starts in 15 days"
          cardTxt="Civil Junior Engineer Live Coaching Batch 2"
          cardDetail_1="200+ Live Classes"
          cardDetail_2="5000+ Questions"
          cardDetail_3="80+ Notes" />

        <Card dadlineTime="Batch closes in 2 days"
          cardTxt="UPSC CDS-2 2021 Live Coaching Batch 3"
          cardDetail_1="220+ Live Classes"
          cardDetail_2="6000+ Questions"
          cardDetail_3="100+ Notes" />

        <Card dadlineTime="5 days left to enroll"
          cardTxt="IBPS PO & SBI PO Live Coaching in English Batc.."
          cardDetail_1="240+ Live Classes"
          cardDetail_2="9000+ Questions"
          cardDetail_3="120+ Notes" />

        <Card dadlineTime="Starts in 15 days"
          cardTxt="Civil Junior Engineer Live Coaching Batch 2"
          cardDetail_1="200+ Live Classes"
          cardDetail_2="5000+ Questions"
          cardDetail_3="80+ Notes" />

        <Card dadlineTime="Batch closes in 2 days"
          cardTxt="UPSC CDS-2 2021 Live Coaching Batch 3"
          cardDetail_1="220+ Live Classes"
          cardDetail_2="6000+ Questions"
          cardDetail_3="100+ Notes" />


      </Carousel>

    </div>
  );
}

export default App;
