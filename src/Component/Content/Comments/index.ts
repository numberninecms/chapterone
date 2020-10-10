/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import $ from 'jquery';

export default function (): void {
    $(() => {
        $('.btn-comment-reply-to').on('click', function (e) {
            e.preventDefault();

            const form = $('#post-comment-form');
            form.insertAfter($(this).closest('.comment-body').find('.comment-info:first'));
            form.find('#comment_form_parent').val($(this).attr('data-parent') as string);
            form.find('#comment_form_cancel_reply').css('display', 'block');
        });

        $('#comment_form_cancel_reply').on('click', function (e) {
            e.preventDefault();

            const form = $('#post-comment-form');
            form.insertAfter($(this).closest('#comments').find('h3:first'));
            form.find('#comment_form_cancel_reply').hide();
        });
    });
}
