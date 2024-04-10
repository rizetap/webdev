from django.shortcuts import render

# Create your views here.

from django.http.response import HttpResponse, JsonResponse
from api.models import Category, Product


def get_products(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]

    return JsonResponse(products_json, safe=False)

def get_product(request, pk=None):
    try:
        product = Product.objects.get(id=pk)
        return JsonResponse(product.to_json())
    except Product.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })


def get_categories(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]

    return JsonResponse(categories_json, safe=False)

def get_category(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
        return JsonResponse(category.to_json())
    except Category.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })

def get_products_by_category(request, pk=None):
    try:
        category = Category.objects.get(pk=pk)
        products = Product.objects.filter(category=category)
        return JsonResponse(products.to_json())
    except Product.DoesNotExist as eв:
        return JsonResponse({
            'error': str(e)
        })



from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CategorySerializer, ProductSerializer

class CategoryProducts(APIView):
    def get(self, request, id):
        try:
            category = Category.objects.get(id=id)
        except Category.DoesNotExist:
            return Response({"message": "Category not found"}, status=404)

        products_in_category = Product.objects.filter(category=category)
        serializer = ProductSerializer(products_in_category, many=True)
        return Response(serializer.data)
