var arr = [
  {
    dp: "https://pbs.twimg.com/media/F-lO7t0XIAA3MIf?format=jpg&name=4096x4096",
    story:
      "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
  },
  {
    dp: "https://i.pinimg.com/736x/dd/97/3a/dd973ac116a977c8dd5296b0da504b8c.jpg",
    story:
      "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    dp: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    story:
      "https://i.pinimg.com/736x/04/24/12/04241279f5a85323615d383e6a55f151.jpg",
  },
  {
    dp: "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais",
    story:
      "https://img.freepik.com/premium-photo/fuji-mountain-kawaguchiko-lake-morning-autumn_906149-6664.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699488000&semt=sph",
  },
];
var storiyan=document.querySelector("#storiyan")
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
});

storiyan.innerHTML= clutter;

storiyan.addEventListener("click",function(dets)
{
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function()
    {
        document.querySelector("#full-screen").style.display="none";
        document.querySelector(".story").style.border="none";
    },3000)

})