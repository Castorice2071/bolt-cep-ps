import {
    helloVoid,
    helloError,
    helloStr,
    helloNum,
    helloArrayStr,
    helloObj,
} from "../utils/samples";
export { helloError, helloStr, helloNum, helloArrayStr, helloObj, helloVoid };
import { dispatchTS } from "../utils/utils";

export const helloWorld = () => {
    alert("Hello from Photoshop");
};

export const placeImages = (filePaths) => {
    var ids = [];

    for (var i = 0; i < filePaths.length; i++) {
        try {
            var desc1 = new ActionDescriptor();
            desc1.putPath(charIDToTypeID("null"), new File(filePaths[i]));
            desc1.putEnumerated(
                charIDToTypeID("FTcs"),
                charIDToTypeID("QCSt"),
                charIDToTypeID("Qcsa")
            );
            var desc2 = new ActionDescriptor();
            desc2.putUnitDouble(
                charIDToTypeID("Hrzn"),
                charIDToTypeID("#Pxl"),
                0.0
            );
            desc2.putUnitDouble(
                charIDToTypeID("Vrtc"),
                charIDToTypeID("#Pxl"),
                0.0
            );
            desc1.putObject(
                charIDToTypeID("Ofst"),
                charIDToTypeID("Ofst"),
                desc2
            );
            var desc3 = executeAction(
                charIDToTypeID("Plc "),
                desc1,
                DialogModes.NO
            );

            ids.push(desc3.getInteger(charIDToTypeID("Idnt")));
        } catch (e) {
            // hello world
            $.writeln("放置图片失败: " + filePaths[i] + " - " + e.message);
        }
    }

    return ids;
};

export const fn1 = () => {
    const files = app.openDialog();
    if (!files || files.length === 0) return;

    const ids = placeImages(files);
};
