const SessionComponent = {
    template: `
    <md-content>
      <md-card class="margin0">
        <md-toolbar class="md-table-toolbar md-default transparent tableToolbar">
          <div class="md-toolbar-tools">
            <div class="md-title">Tutor Others</div>
            <div class="flex"></div>
            <a ui-sref="availability">
              <md-button class="md-raised md-primary md-button md-ink-ripple white">Schedule Your Availability</md-button>
            </a>
          </div>
        </md-toolbar>
        <session-list></session-list>
        <md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{desserts.count}}" md-on-paginate="getDesserts" md-page-select></md-table-pagination>
      </md-card>
    </md-content>

   `
};

export default SessionComponent;
