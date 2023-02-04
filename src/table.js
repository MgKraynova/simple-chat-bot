import { useEffect, useState } from "react";
import { FLOOR, ROOMS } from "./App.const";

export const Table = ({ steps }) => {
  const [roomValue, setRoomValue] = useState(0);
  const [floorValue, setFloorValue] = useState(0);

  useEffect(() => {
    for (const step in steps) {
      if (steps[step]?.metadata?.typeOfValue) {
        switch (steps[step]?.metadata.typeOfValue) {
          case ROOMS: {
            setRoomValue(steps[step]?.value);
            break;
          }
          case FLOOR: {
            setFloorValue(steps[step]?.value);
            break;
          }
          default: {
            return;
          }
        }
      }
    }
  }, [steps]);

  return (
    <div style={{ width: "100%" }}>
      <h4>Параметры квартиры, которую вы ищете</h4>
      <table>
        <tbody>
          <tr>
            <td style={{ paddingRight: "10px" }}>Число комнат</td>
            <td>{roomValue}</td>
          </tr>
          <tr>
            <td>Этаж</td>
            <td>{floorValue}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};