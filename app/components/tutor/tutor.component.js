const TutorComponent = {
    template: `
    <md-content>
      <md-toolbar class="md-table-toolbar md-default transparent tableToolbar">
        <div class="md-toolbar-tools">
          <div class="md-title">Find a Tutor</div>
        </div>
      </md-toolbar>
      <md-card class="margin0">
        <md-table-container>
          <table md-table>
            <thead md-head>
            <tr md-row>
              <th md-column>Thumbnail</th>
              <th md-column md-order-by="tutorToLower">Tutor</th>
              <th md-column md-order-by="subjectToLower">Subject(s)</th>
              <th md-column>Actions</th>
            </tr>
            </thead>
            <tbody md-body>
            <tr md-row>
              <td md-cell>
                <div class="tutorThumb">
                </div>
              </td>
              <td md-cell>Jeff Kellian</td>
              <td md-cell>Math, Social Studies</td>
              <td md-cell>
                <a ui-sref="schedule">
                  <md-button class="md-raised md-primary md-button md-ink-ripple">Schedule Session</md-button>
                </a>
                <md-button class="md-raised md-button md-ink-ripple">Message Tutor</md-button>
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

export default TutorComponent;
