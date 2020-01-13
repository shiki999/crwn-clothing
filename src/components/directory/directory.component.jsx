import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://shop.r10s.jp/rockingchair/cabinet/04506184/imgrc0068634247.jpg',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://img-static.tradesy.com/item/24610699/zara-olive-green-faux-fur-lines-parka-winter-coat-size-6-s-7-0-960-960.jpg',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.pinimg.com/originals/ea/6a/d5/ea6ad5dc64fb98eab3f9156662fbedec.jpg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-15/e35/25022079_1917788338538356_8065178185014181888_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=104&se=7&oh=25d5edb8075f0ef224ebc93aad911780&oe=5E227D9B&ig_cache_key=MTY2NzEwMzgyNDI0OTUxMDcyOQ%3D%3D.2',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://media2.prime.md/image/201711/1140x/barbati_15316300.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }                  
            ]
        }
    }
    
    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;