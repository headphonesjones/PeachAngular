const AvailabilityComponent = {
    template: `
    <md-content>
        <md-toolbar class="md-table-toolbar md-default transparent tableToolbar">
            <div class="md-toolbar-tools">
                <div class="md-title">Schedule Your Availability</div>
                <div class="flex"></div>
                <a ng-href="/tutor-others">
                    <md-button class="md-raised md-default md-button md-ink-ripple">Go Back</md-button>
                </a>
            </div>
        </md-toolbar>
        <md-card class="margin0">
            <div layout="column" ng-cloak class="md-inline-form availability-form">
                <form name="md-primary">
                    <div layout="row">
                        <md-input-container>
                            <label>Enter date</label>
                            <md-datepicker ng-model="user.submissionDate"></md-datepicker>
                        </md-input-container>
                        <md-input-container class="md-icon-float md-block time">
                            <label>Enter start time</label>
                            <md-icon>access_time</md-icon>
                            <input class="md-datepicker-input md-input" type="time" ng-model="startTime">
                        </md-input-container>
                        <md-input-container class="md-icon-float md-block time">
                            <label>Enter end time</label>
                            <md-icon>access_time</md-icon>
                            <input class="md-datepicker-input md-input" type="time" ng-model="endTime">
                        </md-input-container>
                        <md-input-container>
                            <md-button class=" md-primary md-button md-ink-ripple add-time-button">Add to Your Availability</md-button>
                        </md-input-container>
                    </div>
                </form>
            </div>
            <md-table-container>
                <table md-table>
                    <thead md-head>
                    <tr md-row>
                        <th md-column md-order-by="dateToLower">Date</th>
                        <th md-column>Time</th>
                        <th md-column>Duration</th>
                        <th md-column>Actions</th>
                    </tr>
                    </thead>
                    <tbody md-body>
                    <tr md-row>
                        <td md-cell>April 13</td>
                        <td md-cell>3:30PM</td>
                        <td md-cell>1 Hour</td>
                        <td md-cell>
                            <md-button class="md-raised md-warn md-button md-ink-ripple">Cancel</md-button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </md-table-container>
            <md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{desserts.count}}" md-on-paginate="getDesserts" md-page-select></md-table-pagination>
        </md-card>
    </md-content>
    `
};

export default AvailabilityComponent;
