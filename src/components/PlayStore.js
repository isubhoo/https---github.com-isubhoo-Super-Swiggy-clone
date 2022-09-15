import './PlayStore.css'

const PlayStore = () => {
  return (
    <div container className="play">
        <div className="box">
            <div className="head">Restaurants in your pocket</div>
            <p>Order from your favorite restaurants 
                & track on the go, with the all-new Swiggy app.</p>
            <div>
                <a href="https://play.google.com/store/apps/details?id=in.swiggy.android" target="_blank" rel="noopener noreferrer">
                    <img class="playStore" height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"/>
                </a>
                <a href="https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920" target="_blank" rel="noopener noreferrer">
                    <img class="appStore" height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"/>
                </a>
            </div>
            <img className="img1" width="384" height="489" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"/>
            <img class="img2" width="384" height="489" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"/>
        </div>
    </div>
  )
}
export default PlayStore