import {
    BigPlayButton,
    ControlBar,
    CurrentTimeDisplay,
    ForwardControl, PlaybackRateMenuButton, Player,
    ReplayControl, TimeDivider,
    VolumeMenuButton
} from "video-react";
import React from "react";


export function VideoPlayer(props) {
    return (
        <Player src={props.url}
                preload = 'metadata'>
            <BigPlayButton position="center" />
            <ControlBar>
                <VolumeMenuButton vertical />
                <ReplayControl seconds={10} order={1.1} />
                <ForwardControl seconds={30} order={1.2} />
                <CurrentTimeDisplay order={4.1} />
                <TimeDivider order={4.2} />
                <PlaybackRateMenuButton rates={[1.75, 1.5, 1.25, 1, 0.8, 0.5]} order={7.1} />
            </ControlBar>
        </Player>
    )
}

export function VideoPlayerNotFluid(props) {
    return (
        <Player src={props.link}
                preload = 'metadata'
                fluid ={false}
                height = {300}
                width = {"auto"}
        >
            <BigPlayButton position="center" />
            <ControlBar>
                <VolumeMenuButton vertical />
                <ReplayControl seconds={10} order={1.1} />
                <ForwardControl seconds={30} order={1.2} />
                <CurrentTimeDisplay order={4.1} />
                <TimeDivider order={4.2} />
                <PlaybackRateMenuButton rates={[1.75, 1.5, 1.25, 1, 0.8, 0.5]} order={7.1} />
            </ControlBar>
        </Player>
    )
}