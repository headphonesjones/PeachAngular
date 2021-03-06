const DashboardComponent = {
    template: `
    <md-content>
        <md-toolbar class="md-table-toolbar md-default transparent tableToolbar">
            <div class="md-toolbar-tools">
                <div class="md-title">Dashboard</div>
                <div flex="" class="flex"></div>
                <md-subheader class="tableToolbar">Thursday October 7, 2016 at 3:30PM</md-subheader>
            </div>
        </md-toolbar>
        <md-tabs md-dynamic-height md-border-bottom md-stretch-tabs="always" class="md-hue-1">
            <md-tab label="Upcoming Sessions">
                <md-content>
                    <md-card class="margin0">
                        <md-toolbar class="md-table-toolbar md-default">
                            <div class="md-toolbar-tools">
                                <span>Upcoming Sessions</span>
                            </div>
                        </md-toolbar>
                        <session-list></session-list>
                        <md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{desserts.count}}" md-on-paginate="getDesserts" md-page-select></md-table-pagination>
                    </md-card>
                </md-content>
            </md-tab>
            <md-tab label="Past Sessions">
                <md-content class="">
                    <md-card class="margin0">
                        <md-toolbar class="md-table-toolbar md-default">
                            <div class="md-toolbar-tools">
                                <span>Past Sessions</span>
                            </div>
                        </md-toolbar>
                        <session-list></session-list>
                        <md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{desserts.count}}" md-on-paginate="getDesserts" md-page-select></md-table-pagination>
                    </md-card>
                </md-content>
            </md-tab>
            <md-tab label="Pending Actions">
                <md-content class="">
                    <md-card class="margin0">
                        <md-toolbar class="md-table-toolbar md-default">
                            <div class="md-toolbar-tools">
                                <span>Pending Actions</span>
                            </div>
                        </md-toolbar>
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
                                        <md-button class="md-raised md-primary md-button md-ink-ripple">Rate Tutor</md-button>
                                        <md-button class="md-raised md-button md-ink-ripple">Session Docs</md-button>
                                        <md-button class="md-raised md-warn md-button md-ink-ripple">Report Issues(s)</md-button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </md-table-container>
                        <md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{desserts.count}}" md-on-paginate="getDesserts" md-page-select></md-table-pagination>
                    </md-card>
                </md-content>
            </md-tab>
        </md-tabs>
    </md-content>
   `
};

export default DashboardComponent;
