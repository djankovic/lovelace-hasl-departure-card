import {css} from 'lit'

const lineColorsStyles = css`
    .line-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
        border-width: var(--hasl-icon-border-width, 1px);
        border-style: var(--hasl-icon-border-style, solid);
        border-color: var(--hasl-icon-border-color, var(--hasl-line-color, var(--outline-color)));
        border-radius: var(--hasl-icon-border-radius, var(--ha-border-radius-sm));
        margin: var(--hasl-icon-margin, 0 8px 0 0);
        padding: var(--hasl-icon-padding, 0 3px);
        background-color: var(--hasl-icon-background-color, var(--hasl-line-color));
        color: var(--hasl-icon-color, #fff);
        min-width: var(--hasl-icon-min-width, 22px);
        max-width: var(--hasl-icon-max-width);
        height: var(--hasl-icon-height, 22px);
        font-size: var(--hasl-icon-font-size, var(--ha-font-size-s));
        font-weight: var(--hasl-icon-font-weight, var(--ha-font-weight-medium));
        line-height: var(--hasl-icon-line-height, 1);
    }

    /* Default mode colors */
    .metro {
        --hasl-line-color: var(--green-color);
    }
    .train {
        --hasl-line-color: var(--pink-color);
    }
    .tram {
        --hasl-line-color: var(--brown-color);
    }
    .bus {
        --hasl-line-color: var(--light-blue-color);
    }
    .ship {
        --hasl-line-color: var(--indigo-color);
    }
    .ferry {
        --hasl-line-color: var(--blue-color);
    }
    .taxi {
        --hasl-line-color: var(--yellow-color);
    }

    /* Deprecated, preserved for backwards compatibility for SL/Resrobot */
    .provider_sl {
        &.metro {
            --hasl-line-color: #179d4d;
        }
        &.train {
            --hasl-line-color: #ec619f;
        }
        &.tram {
            --hasl-line-color: #985141;
        }
        &.bus,
        &.ship,
        &.ferry,
        &.taxi {
            --hasl-line-color: unset;
            --hasl-icon-color: var(--primary-text-color);
        }
        &.bus_blåbuss {
            --hasl-line-color: #0089ca;
            --hasl-icon-color: #fff;
        }
        &.tram_7 {
            --hasl-line-color: #878a83;
        }
        &.tram_12 {
            --hasl-line-color: #778da7;
        }
        &.tram_21 {
            --hasl-line-color: #b76020;
        }
        &.tram_22 {
            --hasl-line-color: #d77d00;
        }
        &.metro_10,
        &.metro_11 {
            --hasl-line-color: ##0089ca;
        }
        &.metro_13,
        &.metro_14 {
            --hasl-line-color: #d71d24;
        }
    }
`

const departureEntityStyles = css`
    .card-header .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .departures > :first-child {
        margin-top: 0;
    }

    .departure.departed {
        color: var(--secondary-text-color);
    }

    .departure.departed > .main {
        text-decoration: line-through;
    }

    .row {
        margin-top: 8px;

        display: flex;
        justify-content: space-between;
    }

    .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }

    .col.icon {
        flex-basis: 40px;
    }

    .row.name {
        height: 40px;
        padding-left: 8px;
        font-weight: 400;
        font-size: large;
        align-items: center;
        justify-content: center;
    }
    .row.header {
        height: 40px;
        font-size: medium;
        font-weight: 400;
        font-family: var(--paper-font-headline_-_font-family);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
        opacity: var(--dark-primary-opacity);
    }

    .main {
        flex: 2;
    }

    .transport-icon {
        width: 40px;
        height: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .warning {
        color: var(--warning-color);
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .warning-message {
        color: var(--warning-color);
        font-size: smaller;
        text-decoration: unset;
    }

    .updated {
        padding-left: 16px;
        padding-top: 8px;
        font-size: smaller;
    }

    .center { text-align: center; }
    .left { text-align: left; }
    .right { text-align: right; }

    ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
        width: 24px;
        height: 24px;
        color: var(--paper-item-icon-color);
    }
`

export default [departureEntityStyles, lineColorsStyles]
