

$.fn.bgColor = function (color) {
    return this.css({ backgroundColor: color });
}

/**
 * Verändert die Hintergrundfarbe des übergebenen Elements anhand der rgba() - CSS-Eigenschaft
 * @param {object} options (r, g, b, o)
 */
$.fn.bgColorRGB = function (options) {
    let settings = $.extend({
        r: 0,
        g: 0,
        b: 0,
        o: 1
    }, options);

    this.each(function () {
        if (!$(this).hasClass('nobg')) {
            $(this).css({ backgroundColor: 'rgba(' + settings.r + ',' + settings.g + ',' + settings.b + ',' + settings.o + ')' });
        }
    })
    return this;
}

/**
 * Hebt Zahlen in einem Text hervor (Fett und Rot)
 */
$.fn.dyeNumbers = function (options) {

            let settings = $.extend({
                color: 'red',
                fontWeight: 'bold'
            }, options);
            return this.each(function () {
                let text = $(this).html(), neuerText = '';
                for (let i in text) {
                    neuerText += isNaN(text[i]) ? text[i] : '<span data-nr="true">' + text[i] + '</span>';
                }
                $(this).html(neuerText);
                $('span[data-nr]', this).css(settings);
            });
        }

$.ajaxOverlay = function (b) {
    if (b) {
        $('<div id="ajaxLoader-wrapper">')
            .css({
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: 2147483647,
                background: 'rgba(255,255,255,0.75)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            })
            .html('<div>Bitte Warten ...<br><img src="./images/ajax-loader.gif"></div>')
            .appendTo('body');
    }
    else {
        $('#ajaxLoader-wrapper').remove();
    }
}
