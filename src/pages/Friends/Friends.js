import "./Friends.css"
import { PageHead } from '../../Components'
import DataFriends from '../../Data/DataFriends'


const Friends = () => {
  const FriendsData = DataFriends.map((friend, key) => {
    return (
      <>        <div className="friend bg-white p-20 rad-6 p-relative" id={friend.id}>

        <div className="contact" >
          <i className="fa-solid fa-phone"></i>
          <i className="fa-regular fa-envelope"></i>
        </div>
        <div className="txt-c">
          <img src={friend.image} alt="" className="rad-half mt-10 mb-10 w-100 h-100" />
          <h4 className="m-0">{friend.name}</h4>
          <p className="c-grey fs-13 mt-10">{friend.title}</p>
        </div>
        <div className="icons fs-13 p-relative">
          <div className="mb-10">
            <i className="fa-regular fa-face-smile fa-fw"></i>
            <span>{friend.friends} Friend</span>
          </div>
          <div className="mb-10">
            <i className="fa-solid fa-code-commit fa-fw"></i>
            <span>{friend.projects} Projects</span>
          </div>
          <div className="mb-10">
            <i className="fa-regular fa-face-smile fa-fw"></i>
            <span>{friend.articles} Articles</span>
          </div>
          <span className="vip fw-bold c-orange">{friend.vip === true ? "VIP" : " "}</span>
        </div>
        <div className="info between-flex fs-13 ">
          <span className="c-grey">joind {friend.joindate}</span>
          <div>
            <a className="bg-blue c-white btn-shape" href="profile.html">Profile</a>
            <a className="bg-red c-white btn-shape" href="/#">Remove</a>
          </div>
        </div>
      </div>

      </>
    );
  });

  return (


    <>
      <PageHead>Friends</PageHead>

      <div className="friends-page d-grid m-20 gap-20">
        {FriendsData}

      </div>

    </>
  )
}

export default Friends