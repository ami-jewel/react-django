from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HomeViewSet, AboutViewSet, ProductViewSet, CSRViewSet, ContactViewSet

router = DefaultRouter()
router.register(r'home-content', HomeViewSet)
router.register(r'about', AboutViewSet)
router.register(r'products', ProductViewSet)
router.register(r'csr', CSRViewSet)
router.register(r'contact', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]


#urlpatterns = [
#    path('hello/', hello_world, name='hello_world'),
#]