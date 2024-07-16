function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66r9j9FmtXs":
        Script1();
        break;
      case "6pwQxKdjv2w":
        Script2();
        break;
      case "6O5c9batERP":
        Script3();
        break;
      case "6XyD7DfVJco":
        Script4();
        break;
      case "6Q8SAlHYD5C":
        Script5();
        break;
      case "5xPN7qH69NZ":
        Script6();
        break;
      case "5zDIU4usx70":
        Script7();
        break;
      case "6k8FT3dfaA4":
        Script8();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src = "1.mp3";
audio.load();
audio.play();
audio.volume = 0.4;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.src = "1.mp3";
audio.load();
audio.play();
audio.volume = 0.4;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

