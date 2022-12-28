// var face_x,face_y,face_size
var face_x = [] 
var face_y = []
var face_size = []
var face_num = 10

// var song
// var songIsplay=false //設定此變數為'假'(false)，收到按下滑鼠把變數改為"真"(true)
// var amp
// var vol
// function preload(){
//   song = loadSound("WOODZ (I hate you) MV.mp3");
// }


var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
var clr=[]
function preload(){
  song = loadSound("WOODZ (I hate you) MV.mp3");
}


var colors = "cad2c5-84a98c-52796f-354f52-2f3e46-d8f3dc-b7e4c7-95d5b2-74c69d-52b788-40916c-2d6a4f-1b4332-081c15-1f2421-216869-49a078-9cc5a1-dce1de-99e2b4-88d4ab-78c6a3-67b99a-56ab91-469d89-358f80-248277-14746f-036666".split("-").map(a=>"#"+a)

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  // face_size = 400
  // face_x = width/2
  // face_y = height/2

  music_btn = createButton("播音樂")
  music_btn.position(10,10)
  music_btn.size(350, 100);
  music_btn.style('background-color', 'black');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)


  mouse_btn = createButton("暫停音樂")
  mouse_btn.position(370,10)
  mouse_btn.size(350, 100);
  mouse_btn.style('background-color', 'black');
  mouse_btn.style('font-size', '44px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)

  Speech_btn = createButton("語音辨識(跳舞/不要跳)")
  Speech_btn.position(740,10)
  Speech_btn.size(350, 100);
  Speech_btn.style('background-color', 'black');
  Speech_btn.style('font-size', '32px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed)

  // for(var i=0;i<face_num;i++){
  //   face_size[i] = 400  //臉的大小100~400
  //   face_x[i] = width/2
  //   face_y[i] = height/2
  // }

  for(var i=0;i<face_num;i++){
    face_size[i] = random(100,400)  //臉的大小100~400
    face_x[i] = random(100,width)
    face_y[i] = random(300,height)
    clr[i] = colors[int(random(0,colors.length))]
  }
}

function music_btn_pressed(){ //開始音樂
    song.stop()
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()
    music_btn.style('background-color', '#a8dadc');
    mouse_btn.style('background-color', 'black');
    Speech_btn.style('background-color', 'black');
    
}

function mouse_btn_pressed(){ //暫停
  song.pause()
  songIsplay = false
  music_btn.style('background-color', 'black');
  mouse_btn.style('background-color', '#a8dadc');
  Speech_btn.style('background-color', 'black');
}


function Speech_btn_pressed(){ //語音說話
  music_btn.style('background-color', 'black');
  mouse_btn.style('background-color', 'black');
  Speech_btn.style('background-color', '#a8dadc');
  myRec.onResult = showResult;
  myRec.start();  

}


function showResult() //語音說話2
{
	if(myRec.resultValue==true) {
	     result = myRec.resultString
         if(myRec.resultString==="跳舞")
            {
                music_btn_pressed()
             }
         if(myRec.resultString==="不要跳")
            {
 
              mouse_btn_pressed()
             }
	}
}


function draw() {
  background("#ddbea9");
  textSize(50)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  push()
  textSize(50)
  fill(255,0,0)  
  text(result,1100,100);   
  pop()
  for(var j=0;j<face_num;j++){
    push()  
      // fill(255,0,0)
      var f_s = face_size[j]
      translate(face_x[j],face_y[j]) //把(0,0)座標原點移到視窗的中間
      fill(clr[j])
      noStroke()
      triangle(f_s/3,f_s/3,f_s/3, f_s/2100, f_s/2*2, f_s/1.5); //尾巴

      // fill('#ae2012')
      fill(random(253),random(50)+10,random(50)+50)
      ellipse(f_s/5,-f_s/2.3,f_s/5,f_s/5)//鱗片
      ellipse(f_s/3.5,-f_s/2.9,f_s/5,f_s/5)
      ellipse(f_s/2.9,-f_s/3.7,f_s/5,f_s/5)
      ellipse(f_s/2.6,-f_s/4.7,f_s/5,f_s/5)
      ellipse(f_s/2.6,-f_s/15,f_s/5,f_s/5)
      ellipse(f_s/2.6,-f_s/30,f_s/5,f_s/5)
      ellipse(f_s/2.6,-f_s/55,f_s/5,f_s/5)
      ellipse(f_s/2.6,f_s/15.4,f_s/5,f_s/5)
      
    
      
      fill(clr[j])

      // fill('#2a9d8f')
      ellipse(0,0,f_s/1.1,f_s)  //臉
      ellipse(f_s/13,-f_s/2.2,f_s/5,f_s/4)//高眼睛
      ellipse(-f_s/13,-f_s/2.2,f_s/5,f_s/4)//高眼睛

      fill(0)
      ellipse(-f_s/13,-f_s/2.7,f_s/25,f_s/50)//鼻孔
      ellipse(f_s/13,-f_s/2.7,f_s/25,f_s/50)//鼻孔

      
      fill(255)
      ellipse(-f_s/12,-f_s/2.1,f_s/10)//眼眶
      fill(0)
      ellipse(-f_s/9+map(mouseX,0,width,-f_s/10000,f_s/20),-f_s/2+map(mouseY,0,height,-f_s/10000,f_s/20),f_s/30)//眼睛

      noFill()
      
      fill(255)
      ellipse(f_s/12,-f_s/2.1,f_s/10)//眼眶
      fill(0)
      ellipse(f_s/15+map(mouseX,0,width,-f_s/10000,f_s/20),-f_s/2+map(mouseY,0,height,-f_s/10000,f_s/20),f_s/30)//眼睛

      
      
      fill(255)

      if(!songIsplay){
        fill(255,0,0)
        arc(0,-f_s/4-1,f_s/2,f_s/4-10,0,180) //嘴巴
        fill("#aacc00")
        arc(f_s/12.5,-f_s/2.77,f_s/70,f_s/7,0,180)//鼻涕
        fill('#2a9d8f')
        fill(clr[j])
        ellipse(f_s/5,f_s/2.5,f_s/3,f_s/2)//右腿
        ellipse(f_s/3.5,f_s/1.7,f_s/2.5,f_s/5)//右腳
        ellipse(-f_s/5,f_s/2.5,f_s/3,f_s/2)//左腿
        ellipse(-f_s/3.5,f_s/1.7,f_s/2.5,f_s/5)//左腳
        fill(clr[j])
        ellipse(f_s/2,f_s/50,f_s/2.5,f_s/6)//右手臂
        ellipse(f_s/1.5,f_s/50,f_s/6,f_s/6)//右手掌
        ellipse(-f_s/2,f_s/50,f_s/2.5,f_s/6)//左手臂
        ellipse(-f_s/1.5,f_s/50,f_s/6,f_s/6)//左手掌

        fill("#94d2bd")
       ellipse(0,f_s/5,f_s/3,f_s/3)//肚子印記

      }
      else{
        vol = amp.getLevel() //取得聲音值(值為0~1之間)
        // console.log(vol)
        fill(255,0,0)
        arc(0,-f_s/4-1,f_s/2,map(vol,0,0.5,f_s/5,f_s/1.2),0,180)//嘴巴
        fill("#aacc00")
        arc(f_s/12.5,-f_s/2.77,f_s/70,map(vol,0,0.5,f_s/5,f_s/3),0,180)//鼻涕
        fill('#2a9d8f')
        fill(clr[j])
        ellipse(f_s/5,f_s/2.5,f_s/3,f_s/2+map(vol,0,0.5,f_s/5,f_s/7))//右腿
        ellipse(f_s/3.5,f_s/2+map(vol,0,0.5,f_s/5,f_s/7),f_s/2.5,f_s/5)//右腳
        ellipse(-f_s/5,f_s/2.5,f_s/3,f_s/2+map(vol,0,0.5,f_s/5,f_s/7))//左腿
        ellipse(-f_s/3.5,f_s/2+map(vol,0,0.5,f_s/5,f_s/7),f_s/2.5,f_s/5)//左腳
        fill(clr[j])
        ellipse(f_s/2,f_s/50,f_s/5.5+map(vol,0,0.5,f_s/5,f_s/7),f_s/6)//右手臂
        ellipse(f_s/2+map(vol,0,0.5,f_s/5,f_s/7),f_s/50,f_s/6,f_s/6)//右手掌
        ellipse(-f_s/2,f_s/50,f_s/5.5+map(vol,0,0.5,f_s/5,f_s/7),f_s/6)//左手臂
        ellipse(-f_s/2-map(vol,0,0.5,f_s/5,f_s/7),f_s/50,f_s/6,f_s/6)//左手掌

        fill("#94d2bd")
       ellipse(0,f_s/5,f_s/3,f_s/3)//肚子印記

       fill(255,0,0)
       arc(0,-f_s/4-1,f_s/2,map(vol,0,0.5,f_s/5,f_s/1.2),0,180)//嘴巴
       fill("#aacc00")
       arc(f_s/12.5,-f_s/2.77,f_s/70,map(vol,0,0.5,f_s/5,f_s/3),0,180)//鼻涕
       
      
      }
      
      noFill()

      

      pop()
    }
  }

  if(songIsplay){
    vol = amp.getLevel()
    m_x =map(vol,0,1,0,width) 
    m_y= map(vol,0,1,0,height)
  }
  else
  if(mosueIsplay)
  {
    m_x = mouseX
    m_y= mouseY

  }

//   function mousePressed()
// {
//   if(!songIsplay){
//     song.play()
//     songIsplay = true
//     amp=new p5.Amplitude()

//   }
//   else{
//     song.pause()
//     songIsplay = false

//   }
  
// }
  