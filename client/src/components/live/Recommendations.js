const recm = [
    {
        id:"",
        "thumbnail":"https://i.ytimg.com/vi/-Xua0YQlJDY/hq720_live.jpg?sqp=CJip_oQG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXGXrNfS2Je8NOl--4qglN1BaZJQ",
        "title":"Valorant live stream india weekend chills !insta",
        "channel":"TbOne",
        "viewers":13600000,
        "timeAgo": new Date(Date.now()-(24*60*60*1000))
    }
]

function Recommendations(){
    return(
        <div className="w-full my-5">
            <ul className="h-auto">
                <li className="w-full h-32 py-2 flex cursor-pointer">
                    <img src={recm[0].thumbnail} className="rounded-lg h-full"/>
                    <div className="mx-2">
                        <span className="">{recm[0].title}</span>
                        <br />
                        <span className="text-xs text-gray-500">{recm[0].channel}</span>
                        <br />
                        <span className="text-xs text-gray-500">{numFormatter(recm[0].viewers)} watching - {timeSince(recm[0].timeAgo)} ago</span>
                    </div>
                </li>   
            </ul>
        </div>
    )
}

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return Math.round((num/1000).toFixed(1)) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return numberWithCommas(num); // if value < 1000, nothing to do
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Recommendations;