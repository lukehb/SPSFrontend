import { Encoder, WebRTC } from "../DataChannel/InitialSettings";
import { AggregatedStats } from "../PeerConnectionController/AggregatedStats";
import { FreezeFrameLogic } from "../Overlay/FreezeFrameLogic";
import { AfkOverlay } from "../Overlay/AfkOverlay";

/**
 * Interface for the Web RTC Player Controller
 */
export interface IWebRtcPlayerController {
    matchViewportResolution: boolean;
    freezeFrameLogic: FreezeFrameLogic;
    playOverlayEvent: EventListener;

    onAfkEventListener(afkOverlay: AfkOverlay): void;
    
    /**
     * Connect to the Signaling server
     */
    connectToSignallingSever(): void;

    /**
     * Close the Connection to the signaling server
     */
    closeSignalingServer(): void;

    /**
	 * Restart the stream automaticity without refreshing the page
	 */
    restartStreamAutomaticity(): void;

    /**
     * Send the Encoder Settings to the UE Instance as a UE UI Descriptor.
     * @param encoder - Encoder Settings
     */
    sendEncoderSettings(encoder: Encoder): void;

    /**
   * Send the WebRTC Settings to the UE Instance as a UE UI Descriptor.
   * @param webRTC - Web RTC Settings 
   */
    sendWebRtcSettings(webRTC: WebRTC): void;

    /**
     * Sends a UI Interaction Descriptor to the UE Instance
     * @param message - String to send to the UE Instance
     */
    sendUeUiDescriptor(message: string): void;

    /**
     * Sends the UI Descriptor `stat fps` to the UE Instance 
     */
    sendShowFps(): void;

    /**
     * Sends a request to the UE Instance to have ownership of Quality
     */
    sendRequestQualityControlOwnership(): void;

    /**
     * Send a Latency Test Request to the UE Instance
     */
    sendLatencyTest(): void;

    /**
     * Send Aggregated Stats to the Signaling Server
     * @param stats - Aggregated Stats
     */
    sendStatsToSignallingServer(stats: AggregatedStats): void;

    /**
    * To Resize the Video Player element
    */
    resizePlayerStyle(): void;

    /**
     * Registers the mouse
     */
     activateRegisterMouse(): void;

}