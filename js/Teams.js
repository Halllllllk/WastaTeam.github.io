'use strict'
document.addEventListener('DOMContentLoaded', ()=>{
    let cll = localStorage.getItem('cl')
    let hN = localStorage.getItem('headerNavigation')
    let ws = localStorage.getItem('wastaTeam')
    let hW = localStorage.getItem('headerW')
    let opHN = localStorage.getItem('opHN')
    let opWs = localStorage.getItem('opWs')
    let headerNavigation = document.querySelector('.header-navigation')
    let cl = document.getElementById('cl')
    let wastaTeam = document.querySelector('.wastaTeam')
    let header = document.querySelector('header')
    wastaTeam.style.display = ws
    headerNavigation.style.display = hN
    cl.style.display = cll
    header.style.width = hW
    wastaTeam.style.filter = `${opHN}`
    headerNavigation.style.filter =  `${opWs}`
    cl.setAttribute('data-OnOrOff', cll)
    if(cl.getAttribute('data-OnOrOff') == 'Off'){
        document.documentElement.style.setProperty('--hh-h', 'rotate(0deg)')
        document.documentElement.style.setProperty('--gg-g', 'rotate(0deg)')
    }
    setTimeout(()=>{
        document.documentElement.style.setProperty('--hh-t', '1s')
    }, 100)
    if(window.innerWidth < 767){
        header.style.height = localStorage.getItem('headerH')
    }
    cl.addEventListener('click', ()=>{
        if(cl.getAttribute('data-OnOrOff') == 'On' || cl.getAttribute('data-OnOrOff') == 'null'){
            header.style.width = '60px'
            header.style.transition = '1s'
            wastaTeam.style.filter = 'opacity(0%)'
            wastaTeam.style.transition = '300ms'
            headerNavigation.style.filter = 'opacity(0%)'
            headerNavigation.style.transition = '300ms'
            document.documentElement.style.setProperty('--hh-h', 'rotate(0deg)')
            document.documentElement.style.setProperty('--gg-g', 'rotate(0deg)')
            document.documentElement.style.setProperty('--hh-t', '1s')
            cl.style.transition = '1s'
            setTimeout(()=>{
                wastaTeam.style.display = 'none'
                headerNavigation.style.display = 'none'
                cl.setAttribute('data-OnOrOff', 'Off')
                localStorage.setItem('cl', 'Off')
                localStorage.setItem('wastaTeam', 'none')
                localStorage.setItem('headerNavigation', 'none')
                localStorage.setItem('headerW', '60px')
                localStorage.setItem('opHN', 'opacity(0%)')
                localStorage.setItem('opWs', 'opacity(0%)')
            }, 350)
        }
        if(cl.getAttribute('data-OnOrOff') == 'Off' && window.innerWidth > 767){
            header.style.width = '600px'
            header.style.transition = '1s'
            wastaTeam.style.display = 'block'
            headerNavigation.style.display = 'flex'
            document.documentElement.style.setProperty('--hh-h', 'rotate(-45deg)')
            document.documentElement.style.setProperty('--gg-g', 'rotate(45deg)')
            cl.style.transition = '1s'
            setTimeout(()=>{
                wastaTeam.style.filter = 'opacity(100%)'
                wastaTeam.style.transition = '300ms'
                headerNavigation.style.filter = 'opacity(100%)'
                headerNavigation.style.transition = '300ms'
                cl.setAttribute('data-OnOrOff', 'On')
                localStorage.clear()
            }, 370)
        }
        if(cl.getAttribute('data-OnOrOff') == 'On' || cl.getAttribute('data-OnOrOff') == 'null' && window.innerWidth < 767){
            header.style.width = '60px'
            header.style.height = '60px'
            header.style.transition = '1s'
            headerNavigation.style.filter = 'opacity(0%)'
            headerNavigation.style.transition = '300ms'
            document.documentElement.style.setProperty('--hh-h', 'rotate(0deg)')
            document.documentElement.style.setProperty('--gg-g', 'rotate(0deg)')
            document.documentElement.style.setProperty('--hh-t', '1s')
            cl.style.transition = '1s'
            setTimeout(()=>{
                headerNavigation.style.display = 'none'
                cl.setAttribute('data-OnOrOff', 'Off')
                localStorage.setItem('cl', 'Off')
                localStorage.setItem('headerNavigation', 'none')
                localStorage.setItem('headerW', '60px')
                localStorage.setItem('headerH', '60px')
                localStorage.setItem('opHN', 'opacity(0%)')
                localStorage.setItem('opWs', 'opacity(0%)')
            }, 350)
        }
        if(cl.getAttribute('data-OnOrOff') == 'Off' && window.innerWidth < 767){
            header.style.width = '100%'
            header.style.height = '100%'
            header.style.transition = '1s'
            headerNavigation.style.display = 'inline-grid'
            document.documentElement.style.setProperty('--hh-h', 'rotate(-45deg)')
            document.documentElement.style.setProperty('--gg-g', 'rotate(45deg)')
            cl.style.transition = '1s'
            setTimeout(()=>{
                headerNavigation.style.filter = 'opacity(100%)'
                headerNavigation.style.transition = '300ms'
                cl.setAttribute('data-OnOrOff', 'On')
                localStorage.clear()
            }, 370)
        }
    })
})
  