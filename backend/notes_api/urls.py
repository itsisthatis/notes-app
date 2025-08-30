from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),

    # Users authentication (register, login, refresh)
    path("api/users/", include("users.urls")),

    # Notes CRUD
    path("api/", include("notes.urls")),
]
