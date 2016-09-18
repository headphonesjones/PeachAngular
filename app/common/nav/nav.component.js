
const NavComponent = {
    template: `
    <md-content class="navbar">
        <md-toolbar class="md-hue-2">
            <div class="md-toolbar-tools">
                <a ui-sref="/">
                    <img src="images/Peach_Logo2.png" id="mainLogo"/>
                </a>
                <span flex></span>
                <div>
                    <md-button ui-sref="dashboard">Dashboard</md-button>
                    <md-button ui-sref="tutor">Find a Tutor</md-button>
                    <md-button ui-sref="session">Tutor Others</md-button>
                    <md-button ui-sref="record">Record</md-button>
                    <md-button ui-sref="session-history">History</md-button>
                </div>
                <md-menu md-offset="0 -7 " md-position-mode="target-right bottom">
                    <md-button class="md-icon-button" aria-label="Settings" ng-click="$mdOpenMenu($event)">
                        <md-icon class="material-icons">settings</md-icon>
                    </md-button>
                    <md-menu-content width="2">
                        <md-menu-item>
                            <a ui-sref="settings">
                                <md-button ng-click="">
                                    <span md-menu-align-target>Settings</span>
                                </md-button>
                            </a>
                        </md-menu-item>
                        <md-menu-item>
                            <a ui-sref="stats">
                                <md-button ng-click="">
                                    <span md-menu-align-target>Stats</span>
                                </md-button>
                            </a>
                        </md-menu-item>
                        <md-menu-item>
                            <a href="/">
                                <md-button ng-click="">
                                    <span md-menu-align-target>Log Out</span>
                                </md-button>
                            </a>
                        </md-menu-item>
                    </md-menu-content>
                </md-menu>
            </div>
        </md-toolbar>
    </md-content>
   `
};

export default NavComponent;
