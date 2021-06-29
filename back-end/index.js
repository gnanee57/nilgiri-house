const express = require("express");
const { google } = require("googleapis");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/eventRegister", (req, res) => {
    res.render("index");
});

app.get("/post", async (req, res) => {

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    // Create client instance for auth
    const client = await auth.getClient();

    // Instance of Google Sheets API
    const googleSheets = google.sheets({version: "v4", auth: client});

    const spreadsheetId = "1s7S_-JEzHykt37Jcd8TnHAJ4fSA26n7vKctFCGw8aFs";

    // Get metadata about spreadsheet
    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "galleryContent",
    });

    // Write row(s) to spreadsheet
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "galleryContent!A:F",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [["Gnaneswar", "326","Music","Song","","null"]],
        },
    });

    res.send(getRows.data);
});

app.listen(3001, (req, res) => console.log("running on 1337"));