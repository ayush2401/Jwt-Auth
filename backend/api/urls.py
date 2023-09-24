from django.urls import path
from .views import *

urlpatterns = [
    path("register/", CustomUserCreate.as_view(), name="register"),
    path("logout/" , BlacklistTokenUpdateView.as_view() , name = "logout"),
    # path('home/' , views.HomeView.as_view() , name = 'home'),
    # path('logout/', views.LogoutView.as_view(), name ='logout')
]
