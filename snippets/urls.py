from django.conf.urls import patterns, url
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = patterns('snippets.views',
    url(r'^header_api/$', 'header_list'),
    url(r'^Footer_api/$', 'footer_list'),
    url(r'^my_code/$', 'render_index'),
)

urlpatterns = format_suffix_patterns(urlpatterns)