import React, { useEffect, useRef } from 'react';
import './homeView.css';
import image1 from '../images/video.jpg';
import image2 from '../images/shop.jpg';
import image3 from '../images/exercise.jpg';
import image4 from '../images/portfolio4.jpg';
import shop from '../images/logos/shop.png';
import crondose from '../images/logos/crondose.png';
import cinema from '../images/logos/cinema.png';
import exercise from '../images/logos/exercise.png';
import { Link } from 'react-router-dom';

const HomeView = () => {
    const portfolioItems: React.MutableRefObject<any> = useRef();
    useEffect(() => {
        const childrens = Array.from(portfolioItems.current.children);
        console.log('This are the children ', childrens);
        childrens.forEach((children: any) => {
            console.log('HOW MANY CHILDREN ', children.childNodes[0]);
            children.addEventListener('mouseover', () => {
                /*console.log(portfolioItem.childNodes[3].classList);*/
                children.childNodes[0].classList.add('img-darken');
            });

            children.addEventListener('mouseout', () => {
                /*console.log(portfolioItem.childNodes[3].classList);*/
                children.childNodes[0].classList.remove('img-darken');
            });
        });
    }, []);

    const netflix = () => (window.location.href = 'https://netflix-clone-5966a.web.app');
    const amazon = () => (window.location.href = "https://challange-2befc.web.app/")

    return (
        <div>
            <div className='content-wrapper'>
                <div ref={portfolioItems} className='portfolio-items-wrapper'>
                    <div className='portfolio-item-wrapper'>
                        <div className='portfolio-img-background' style={{ backgroundImage: `url("${image1}")` }}></div>

                        <div className='image-text-wrapper' onClick={netflix}>
                            <div className='logo-wrapper'>
                                <img className="cinema" src={cinema} alt='logo' />
                            </div>
                            <div className='subtitle'>Netflix-project(frontend)</div>
                        </div>
                    </div>

                    <div className='portfolio-item-wrapper'>
                        <div className='portfolio-img-background' style={{ backgroundImage: `url("${image2}")` }}></div>

                        <div className='image-text-wrapper' onClick={amazon}>
                            <div className='logo-wrapper'>
                                <img className="amazon" src={shop} alt='logo' />
                            </div>
                            <div className='subtitle'>Amazon-clone project (Fullstack)</div>
                        </div>
                    </div>
                    <div className='portfolio-item-wrapper'>
                        <div className='portfolio-img-background' style={{ backgroundImage: `url("${image3}")` }}></div>

                        <div className='image-text-wrapper'>
                            <div className='logo-wrapper'>
                                <img className="exercise" src={exercise} alt='logo' />
                            </div>
                            <div className='subtitle'>Exercise tracker (Fullstack)</div>
                        </div>
                    </div>

                    <div className='portfolio-item-wrapper'>
                        <div className='portfolio-img-background' style={{ backgroundImage: `url("${image4}")` }}></div>

                        <div className='image-text-wrapper'>
                            <div className='logo-wrapper'>
                                <img src={crondose} alt='logo' />
                            </div>
                            <div className='subtitle'>and css 2020-10-13 sfgsf sdfgsdfg sdfgsdfg</div>
                        </div>
                    </div>
                    <div className='portfolio-item-wrapper'>
                        <div className='portfolio-img-background' style={{ backgroundImage: `url("${image4}")` }}></div>

                        <div className='image-text-wrapper'>
                            <div className='logo-wrapper'>
                                <img src={crondose} alt='logo' />
                            </div>
                            <div className='subtitle'>and css 2020-10-13 sfgsf sdfgsdfg sdfgsdfg</div>
                        </div>
                    </div>
                    <div className='portfolio-item-wrapper'>
                        <div className='portfolio-img-background' style={{ backgroundImage: `url("${image4}")` }}></div>

                        <div className='image-text-wrapper'>
                            <div className='logo-wrapper'>
                                <img src={crondose} alt='logo' />
                            </div>
                            <div className='subtitle'>and css 2020-10-13 sfgsf sdfgsdfg sdfgsdfg</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeView;
