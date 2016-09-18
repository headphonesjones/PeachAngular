const SessionScheduleComponent = {
    template: `
    <md-toolbar class="md-table-toolbar md-default transparent tableToolbar">
        <div class="md-toolbar-tools">
            <div class="md-title">
                Schedule Session with Jeff Kellian
            </div>
            <div flex="" class="flex"></div>
            <a ng-href="/find-tutor">
                <md-button class="md-raised md-default md-button md-ink-ripple">Go Back</md-button>
            </a>
        </div>
    </md-toolbar>
    <div class="scheduler">
        <md-subheader class="md-primary">
            <div class="circle circle--available"></div>Available
            <div class="circle circle--unavailable"></div>Unavailable</div>
        </md-subheader>
        <div class="datePicker content-grid" layout="row">
            <div class="datePickerOption" flex>
                <div class="circle circle--available"></div>
                <span class="datePicker--day">MON</span>
                <span class="datePicker--number">23</span>
            </div>
            <div class="datePickerOption" flex>
                <div class="circle circle--unavailable"></div>
                <span class="datePicker--day">MON</span>
                <span class="datePicker--number">23</span>
            </div>
            <div class="datePickerOption" flex>
                <div class="circle circle--unavailable"></div>
                <span class="datePicker--day">MON</span>
                <span class="datePicker--number">23</span>
            </div>
            <div class="datePickerOption" flex>
                <div class="circle circle--available"></div>
                <span class="datePicker--day">MON</span>
                <span class="datePicker--number">23</span>
            </div>
            <div class="datePickerOption" flex>
                <div class="circle circle--available"></div>
                <span class="datePicker--day">MON</span>
                <span class="datePicker--number">23</span>
            </div>
            <div class="datePickerOption" flex>
                <div class="circle circle--unavailable"></div>
                <span class="datePicker--day">MON</span>
                <span class="datePicker--number">23</span>
            </div>
            <div class="datePickerOption datePicker--calendarButton " flex>
                <i class="material-icons">date_range</i>
            </div>
        </div>
    
        <div class="timePicker content-grid" layout="row">
            <div class="timePickerOption" flex>
                <div class="circle circle--outline"></div>
                <span class="timePicker--time">9:30</span>
                <span class="timePicker--ampm">AM</span>
            </div>
            <div class="timePickerOption" flex>
                <div class="circle circle--outline"></div>
                <span class="timePicker--time">11:30</span>
                <span class="timePicker--ampm">AM</span>
            </div>
            <div class="timePickerOption" flex>
                <div class="circle circle--outline"></div>
                <span class="timePicker--time">1:30</span>
                <span class="timePicker--ampm">PM</span>
            </div>
            <div class="timePickerOption" flex>
                <div class="circle circle--outline"></div>
                <span class="timePicker--time">5:00</span>
                <span class="timePicker--ampm">PM</span>
            </div>
            <div class="timePickerOption" flex>
                <div class="circle circle--outline"></div>
                <span class="timePicker--time">8:30</span>
                <span class="timePicker--ampm">PM</span>
            </div>
        </div>
        <div class="scheduleNowButtonContainer">
            <button class="md-raised md-primary md-button md-ink-ripple">Schedule Session</button>
        </div>
    </div>
    `
};

export default SessionScheduleComponent;
