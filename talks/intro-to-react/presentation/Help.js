import React from "react";
import ReactModal from "react-modal";
import _ from "lodash";

export default function Help({ isOpen, onClose }) {
  return (
    <ReactModal isOpen={isOpen} contentLabel="Basic Modal">
      <table>
        <tr>
          <td>Right Arrow</td>
          <td>Next Slide</td>
        </tr>
        <tr>
          <td>Left Arrow</td>
          <td>Previous Slide</td>
        </tr>
        <tr>
          <td>Space</td>
          <td>Next Slide</td>
        </tr>
        <tr>
          <td>Shift+Space</td>
          <td>Previous Slide</td>
        </tr>
        <tr>
          <td>Alt/Option + O</td>
          <td>Toggle Overview Mode</td>
        </tr>
        <tr>
          <td>Alt/Option + P</td>
          <td>Toggle Presenter Mode</td>
        </tr>
        <tr>
          <td>Alt/Option + T</td>
          <td>Toggle Timer in Presenter Mode</td>
        </tr>
        <tr>
          <td>Alt/Option + A</td>
          <td>Start autoplay (if enabled)</td>
        </tr>
      </table>
      <button onClick={onClose}>Close</button>
    </ReactModal>
  );
}
