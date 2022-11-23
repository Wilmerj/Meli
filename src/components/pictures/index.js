import React from "react";
import picturesStyles from './pictures.module.scss';
import propTypes from "prop-types";

export default function Pictures (props) {
    return(
        <div className={picturesStyles.pictureContainer}>
            {props.listPictures.map((picture) => (
                <img src={picture.url}></img>
            ))}
        </div>
    );
}

Pictures.propTypes= {
    listPictures: propTypes.array
};