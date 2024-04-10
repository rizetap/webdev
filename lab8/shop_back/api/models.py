from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    price = models.FloatField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            # 'category': self.category,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'count': self.count,
            'is_active': self.is_active

        }
