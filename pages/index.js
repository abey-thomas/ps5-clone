import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="screen">
      <header>
        <section className="media-nav">
          <a href="#" className="active">
            Games
          </a>
          <a href="#" >
            Media
          </a>
        </section>
        <section className="settings">
          <span className="icon">
            <i className="fa fa-search"/>
          </span>
          <span className="icon">
            <i className="fa fa-cog"/>
          </span>
          <span className="icon">
            <img className="user" src="https://randomuser.me/api/portraits/women/44.jpg"/>
          </span>
          <span className="time">
            8:06 PM
          </span>
        </section>
      </header>
      <div className="container">
        <section className="game-nav">
          <div className="game active">
            <i className="fa fa-location-arrow"></i>
          </div>
          <div className="game">
            <div className="img" style={{
              background: "url(https://i.redd.it/8pvdi0pne8a51.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              transform: "scale(1.5)"
            }}>
            </div>
          </div>
          <div className="game">
            <div className="img" style={{
              background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEK_UiBvDtgN6dBzTCyUOTOUCQ9QYbWzn0w&usqp=CAU)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              transform: "scale(1.5)"
            }}>
            </div>
          </div>
          <div className="game">
            <div className="img" style={{
              background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRwTEp_F-cFcRumGgScs2DdIBI_7l_3W0zg&usqp=CAU)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              transform: "scale(1.5)"
            }}>
            </div>
          </div>
          <div className="game">
            <div className="img" style={{
              background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYS8YGUpMLa2K6Gk2HmjOU_sv9ERUoPRh-Mw&usqp=CAU)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              transform: "scale(1.5)"
            }}>
            </div>
          </div>
          <div className="game">
            <div className="img" style={{
              background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPl5tCVQsxsA87sRRXsOMoS0s1LLGpfi4gw&usqp=CAU)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              transform: "scale(1.5)"
            }}>
            </div>
          </div>
          <div className="game">
            <div className="img" style={{
              background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCwWDH4qB9v9vNpAlXG6rP7jhcNv5I1PyXQ&usqp=CAU)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              transform: "scale(1.5)"
            }}>
            </div>
          </div>
        </section>
            <section className="info">
              <span className="sub-title">
                Official news from playstation | 11/28/2020
              </span>
              <h1>Ready for a PS5 Adventure?</h1>
              <p>ASTRO's playroom is preloading and waiting for you!
                Explore the new capabilities of PS5 and feel the world..
                .
              </p>
            </section>
            
      </div>
      <section id="video-trailers">
              <div className="trailer">
                <img className="image" 
                src="https://assets1.ignimgs.com/2020/04/30/491495eaa1d61af478023224602-acv-norwayiconic-male-1588259104701.jpg">
                </img>
                <div className="video-info">
                  <div className="circle-player">
                    <i className="fa fa-play"></i>
                  </div>
                  <span className="title">Assasin's creed </span>
                </div>
              </div>
              <div className="trailer">
                <img className="image" 
                src="https://gamingbolt.com/wp-content/uploads/2018/04/Far-Cry-4-bullshot.jpg">
                </img>
                <div className="video-info">
                  <div className="circle-player">
                    <i className="fa fa-play"></i>
                  </div>
                  <span className="title">Far Cry 4 – Ubisoft Montreal </span>
                </div>
              </div>
              <div className="trailer">
                <img className="image" 
                src="https://i.pinimg.com/originals/8e/45/ce/8e45ce477f3349ea31fba600dd8cd139.jpg">
                </img>
                <div className="video-info">
                  <div className="circle-player">
                    <i className="fa fa-play"></i>
                  </div>
                  <span className="title">Horizon Zero Dawn  </span>
                </div>
              </div>
              <div className="trailer">
                <img className="image" 
                src="https://i2.wp.com/twinfinite.net/wp-content/uploads/2020/03/Demon-Slayer-4.jpg?w=496&h=279&ssl=1">
                </img>
                <div className="video-info">
                  <div className="circle-player">
                    <i className="fa fa-play"></i>
                  </div>
                  <span className="title">Daemon Slayer </span>
                </div>
              </div>
              <div className="trailer">
                <img className="image" 
                src="https://i.imgur.com/j3vNOwX.jpg">
                </img>
                <div className="video-info">
                  <div className="circle-player">
                    <i className="fa fa-play"></i>
                  </div>
                  <span className="title">Grand Theft Auto 6 </span>
                </div>
              </div>
              <div className="trailer">
                <img className="image" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29v41jyUeplA9UYTCttN-m5ZE53JZArh-Ag&usqp=CAU">
                </img>
                <div className="video-info">
                  <div className="circle-player">
                    <i className="fa fa-play"></i>
                  </div>
                  <span className="title">Genshin Impact </span>
                </div>
              </div>
            </section>
    </div>
  )
}
