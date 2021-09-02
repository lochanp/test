import React from 'react'
import ArtistCard from './ArtistCard'
import Masonry from 'react-masonry-css'
import infocard1 from '../assets/images/dummy/info-card-278X164.jpg'
import infocard2 from '../assets/images/dummy/info-card-278X278.jpg'
import infocard3 from '../assets/images/dummy/info-card-278X467.jpg'
import Artwork1 from '../assets/images/dummy/Bitmap2.jpg'
import Artwork2 from '../assets/images/dummy/Bitmap.jpg'
import Artwork3 from '../assets/images/dummy/Bitmap3.jpg'



function MasonryGrid() {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
    <Masonry
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column">
        <ArtistCard image={Artwork1} />
        <ArtistCard image={Artwork2} />
        <ArtistCard image={Artwork1} />
        <ArtistCard image={Artwork3} />
        <ArtistCard image={Artwork2} />
        <ArtistCard image={Artwork3} />
        <ArtistCard image={Artwork2} />
        <ArtistCard image={Artwork2} />
    </Masonry>
    )
}

export default MasonryGrid
