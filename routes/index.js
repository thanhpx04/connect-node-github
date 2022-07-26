export default function routes(app, addon) {
    // Redirect root path to /atlassian-connect.json,
    // which will be served by atlassian-connect-express.
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    // app.get("/main", (req, res) => {
    //   const { issueKey } = req.query;
    //   getIssueSummary(addon, req, issueKey).then((summary) => {
    //     if (summary) {
    //       res.render("main.hbs", {
    //         summary: summary
    //       });
    //     } else {
    //       res.render("nodata.hbs");
    //     }
    //   });
    // });

    // Add additional route handlers here...
}
