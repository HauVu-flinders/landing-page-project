/**
 * Manipulate the DOM
 * 1. Automatically build the navigation bar
 * 2. Add class "active" when a section is near on top of viewport
 * 3. Smooth scroll to section when click to a nav link
 */

/**
 * Define global variables
 */
//navigation global variable
const navList = document.getElementById('navbar_list')
//section global variable
const sections = document.querySelectorAll('section')
//fragment global variabe
const fragment = new DocumentFragment()
//
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//function to check if a section is in viewport
function isInViewPort(section) {
    const rect = section.getBoundingClientRect()
    return (rect.top >= 300 && rect.bottom <= window.innerHeight)
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the navigation function
function buildNav() {
    for(let section of sections) {
        const navName = section.id
        let newList = document.createElement('li')
        let newAnchor = document.createElement('a')
        newAnchor.innerText = navName
        newList.appendChild(newAnchor)
        fragment.appendChild(newList)
    }
    navList.appendChild(fragment)
}
//add active class function
function addActiveClass() {
    for(let section of sections) {
        if(isInViewPort(section)) {
            section.classList.add('active-class')
        }
        else section.classList.remove('active-class')
    }
}
// Scroll to anchor ID using scrollIntoView 
function scrollTo(){
    const anchors = document.getElementsByTagName('a')
  for (let i=0; i<anchors.length; i++){
    anchors[i].addEventListener('click',() => {
      sections[i].scrollIntoView({behavior: "smooth", block: "center", inline: "end"})
    })
  }
}
/**
 * End Main Functions
*/

//build the navigation bar
buildNav(navList)
//set section as active
window.addEventListener('scroll', addActiveClass)
// Scroll to section on link click
scrollTo()