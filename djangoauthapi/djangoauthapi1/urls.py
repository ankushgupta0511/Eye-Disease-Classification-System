from django.contrib import admin
from django.urls import path,include


# import bellow all code in urls.py of djangoauthapi apps
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns  # import in header



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/',include('account.urls')),
    path('api/user/predict/',include('healthprediction.urls')),
]


# import in footer
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

urlpatterns += staticfiles_urlpatterns()



