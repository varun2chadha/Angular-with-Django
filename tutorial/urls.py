from django.conf.urls import patterns, url, include
from rest_framework import routers
from quickstart import views
from settings import STATIC_URL
from django.contrib import admin
admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browseable API.
urlpatterns = patterns('',
	url(r'^', include(router.urls)),
    url(r'^', include('snippets.urls')),
    url(r'^my_code$', include('snippets.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
)