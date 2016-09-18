const SessionListComponent = {
    bindings: {
        sessions: '<',
    },
    template: `
    <md-table-container>
        <table md-table>
            <thead md-head>
            <tr md-row>
                <th md-column md-order-by="dateToLower">Date/Time</th>
                <th md-column md-order-by="subjectToLower">Subject</th>
                <th md-column md-order-by="tutorToLower">Tutor</th>
                <th md-column>Student</th>
                <th md-column>Actions</th>
            </tr>
            </thead>
            <tbody md-body>
            <tr md-row>
                <td md-cell>
                    <div class="datebox">
                        <div class="month">Oct</div>
                        <div class="day">18</div>
                        <div class="time">3:30PM</div>
                    </div>
                </td>
                <td md-cell>Math</td>
                <td md-cell>Matt Jones</td>
                <td md-cell>You</td>
                <td md-cell>
                    <md-button class="md-raised md-primary md-button md-ink-ripple">Start Session</md-button>
                    <md-button class="md-raised md-button md-ink-ripple">Session Docs</md-button>
                    <md-button class="md-raised md-warn md-button md-ink-ripple">Cancel</md-button>
                </td>
            </tr>
            </tbody>
        </table>
    </md-table-container>
    `
};

export default SessionListComponent;
