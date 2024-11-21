import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Navbar = ({authenticate}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아', '아동', 'H&M  HOME', 'Sale', '지속가능성']
    useEffect(()=>{
       let line1= document.querySelector('.line-1-1');
       let menuList=document.querySelector('.menu-list');
       line1.addEventListener('click',()=>{
        line1.classList.toggle('add')
        if(line1.classList.contains('add')){
           menuList.classList.add('add')
        }else {
            menuList.classList.remove('add')
        }
       })
    })
    let navigate=useNavigate()
    const gotoLogin=()=>{
        navigate('/login')
    }
    const search =(e)=>{
        if(e.key==='Enter') {
            //입력한 검색어를 읽어와서
            //url을 바꿔준다
            let keyword=e.target.value;
            navigate(`/?q=${keyword}`)
        }
    }
    return (
        <div>
            <div className='line-1'>
                <div className='line-1-1'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='login-button'>
                    <FontAwesomeIcon icon={faUser} />
                    <div onClick={gotoLogin}>{authenticate==true?'로그인했음':'로그인안했음'}</div>
                </div>
            </div>
            <div className='nav-section'>
                <img onClick={()=>{
                    navigate('/')
                }} width={100} src='data:image/png;base64,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' alt='hnm' />
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {
                        menuList.map((menu,i) => {
                            return <li key={i}>{menu}</li>
                        })
                    }
                </ul>
                <div className='search-area'>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                    <input className='searc-input' type='text' placeholder='제품검색' onKeyPress={e=>{search(e)}}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
