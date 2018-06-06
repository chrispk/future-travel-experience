---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div class="fte-content-bg visible-md visible-lg">
    <div class="container fte-content-bg-box-shadow"></div>
</div>
<div class="fte-content">
    <section class="section">
        <div class="container news-lead">
            <div class="row">
                <div class="col-md-8">
                    {%- include news-lead.html -%}
                </div>
                <div class="col-md-4">
                    {%- include sidebar-lead.html -%}
                </div>
            </div>
        </div>
    </section>
    <div class="clearfix"></div>
    <div class="container">
        {%- include ticker-bar.html -%}
    </div>
    <br />
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                {%- include news-featured.html -%}
            </div>
            <div class="col-md-4">
                {%- include sidebar-events-next.html -%}
                {%- include sidebar-events-more.html -%}
            </div>
        </div>
    </div>
    <br />
    {%- include ad-row.html -%}
    {%- include news-home.html -%}
    <br />
    {%- include events-slider.html -%}
    <br />
    {%- include news-home2.html -%}
    {%- include social-media.html -%}
    {%- include subscribe-bar.html -%}
</div>
