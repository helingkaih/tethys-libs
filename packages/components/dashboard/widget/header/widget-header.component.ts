import { OnInit, Component, Input, ContentChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'thy-dashboard-widget-header',
    templateUrl: './widget-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'thy-dashboard-widget-header' }
})
export class ThyDashboardWidgetHeaderComponent implements OnInit {
    @Input() thyTitle!: string | TemplateRef<any>;

    @Input() thyDescription!: string | TemplateRef<any>;

    @ContentChild('operation') operationTemplateRef!: TemplateRef<any>;

    constructor() {}

    ngOnInit() {}
}
