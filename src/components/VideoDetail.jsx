import React from 'react';

const VideoDetail = ({ video }) => {
    return (
        video ? (
            <div className='ui segment'>
                <div className='ui embed'>
                    <iframe title={'Video Player'} src={`https://www.youtube.com/embed/${video.id.videoId}`} />
                </div>
                <h4> {video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>)
            : (<div>loading</div>));
};

export default VideoDetail;