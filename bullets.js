function bulletTouching(b,w){
    if(wall.x-bullet.x < bullet.width/2 + wall.width/2)
    {
      return 1
    }else {
      return 0
    }
  
  }