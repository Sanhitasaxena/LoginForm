const img = document.getElementById('img')
// const bod = document.getElementsByTagName('body')
// bod.append('Hiiiiiii')


function myFunc(){
// const body = document.getElementsByTagName('body')
    // body.('hiiiiiiii')
  img.style.display = 'block'
  setTimeout(()=>{
    document.getElementById('container').innerHTML = "Hiiiiiiiii"
    
    console.log(' I am timeOut function')
  }, 2000)
}